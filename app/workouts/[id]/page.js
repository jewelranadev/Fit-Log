import { getWorkoutById } from "@/lib/workouts";

const WorkOutDetails = async ({ params }) => {
    const { id } = await params;
    const wrokout = await getWorkoutById(id);
    console.log(wrokout);

    return
     
}