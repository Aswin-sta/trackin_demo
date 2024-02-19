// GetEnrolledParticipants.js
import axiosInstance from "../../../configs/axiosConfigs";

const GetEnrolledParticipants = async (trainingProgramId: number) => {
  try {
    //const {id}=useParams();
    //const { id } = useParams();

    // const trainingProgramId=10;
    //const response = await axiosInstance.get('users-enrolled?trainingProgramId=14');
    console.log("calling ", trainingProgramId);
    const response = await axiosInstance.get(
      `users-enrolled?trainingProgramId=${trainingProgramId}`
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training programs:", error);
    return [];
  }
};

export default GetEnrolledParticipants;
