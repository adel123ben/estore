import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios"
import { toast } from "sonner"

interface Props {
    formulaires: {
        _id: string,
        isMarked: boolean,
    }
}
const ChekboxItem = ({ formulaires }: Props) => {
    const handeUpdate = async (e:any) => {
       
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/formulaire/${formulaires._id}`, {
            isMarked: !formulaires.isMarked
        })
        if(res.status === 200){
            window.location.reload()
            toast.success("Product Updated")
        }else{
            console.log(res)
            toast.error("Something went wrong")
        }
    }
    return ( 
        <div>
            <Checkbox
                className="w-4 h-4"
                id={formulaires._id}
                checked={formulaires.isMarked}
                onCheckedChange={handeUpdate}
            />
        </div>
     );
}
 
export default ChekboxItem;