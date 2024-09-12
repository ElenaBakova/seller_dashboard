import { useEffect, useState } from "react";

import {
  Box,
  CircularProgress,
  Grid2 as Grid,
  SelectChangeEvent,
} from "@mui/material";

import { Advertisment } from "../../../../server/types/types.ts";
import useGetAllAdvertisements from "../api/useGetAllAdvertisements.ts";

import SearchBar from "../../../widgets/SearchBar/SearchBar.tsx";
import PaginationControls from "../../../widgets/Pagination/PaginationControls.tsx";
import AdvertisementCard from "../../../widgets/AdvertisementCard/AdvertisementCard.tsx";
import PaginationSizeSelector from "../../../widgets/Pagination/PaginationSizeSelector.tsx";
import CreateAdvertisementModal from "../../../widgets/CreateAdvertisementModal/CreateAdvertisementModal.tsx";

const AllAdvertisementsPage = () => {
  const { advertisements, loading } = useGetAllAdvertisements();
  const [filteredAdvertisements, setFilteredAdvertisements] = useState<
    Advertisment[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [adsPerPage, setAdsPerPage] = useState(10);

  const totalPages = Math.ceil(filteredAdvertisements.length / adsPerPage);
  const lastAdIndex = currentPage * adsPerPage;
  const firstAdIndex = lastAdIndex - adsPerPage;

  const handleAdsPerPageChange = (event: SelectChangeEvent) => {
    setAdsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (advertisements) {
      setFilteredAdvertisements(advertisements);
    }
  }, [advertisements]);

  useEffect(() => {
    setFilteredAdvertisements(
      advertisements.filter((item) =>
        item.name.toLowerCase().includes(searchQuery),
      ),
    );
    setCurrentPage(1);
  }, [advertisements, searchQuery]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box className={"pageContent"}>
      <Grid container flexDirection="column" spacing={2}>
        <Grid container direction="row" spacing={2}>
          <CreateAdvertisementModal />

          <Grid container flexDirection="row" sx={{ marginLeft: "auto" }}>
            <PaginationSizeSelector
              cardsPerPage={adsPerPage}
              handleCardsPerPageChange={handleAdsPerPageChange}
            />

            <SearchBar onQueryChange={setSearchQuery} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {filteredAdvertisements ? (
            filteredAdvertisements
              .slice(firstAdIndex, lastAdIndex)
              .map((ad) => (
                <Grid key={ad.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <AdvertisementCard advertisement={ad} />
                </Grid>
              ))
          ) : (
            <></>
          )}
        </Grid>
      </Grid>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default AllAdvertisementsPage;
