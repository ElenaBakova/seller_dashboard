import { Advertisment } from "../../../../server/types/types.ts";

const saveChanges = async (data: Advertisment) => {
  try {
    const res = await fetch(`http://localhost:3000/advertisements/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log("Changes saved successfully");
    }
  } catch (error) {
    console.error("An error occurred while saving changes:", error);
    throw error;
  }
};

export default saveChanges;
