import { UserProps } from "@/interfaces"
import User_img from '@/public/user.jpeg'
import Image from 'next/image'

const UserCard: React.FC<UserProps> = ({ name, address, phone, website, company, email }) => {
    return(
        <div className="border border-2 p-[10px]">
            <Image src={User_img} alt="" className="h-[100px] w-[100px]"/>
            <h2 className="">{name}</h2>
            <div className="grid grid-cols-2">
                <p className=""><b>Address: </b> {address.city}</p>
                <p className=""><b>Phone number: </b>{phone}</p>
                <p className=""><b>Website: </b>{website}</p>
                <p className=""><b>Company: </b>{company.name}</p>
                <p className=""><b>Email: </b>{email}</p>
            </div>
        </div>
    )
}

export default UserCard;