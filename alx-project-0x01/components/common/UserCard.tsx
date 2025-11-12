import { Users } from "@/interfaces"
import User_img from '@/public/user.jpeg'
import Image from 'next/image'

const UserCard: React.FC<Users> = ({ name, address, phone, website, company, email }) => {
    return(
        <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <Image src={User_img} alt="" />
            <h1 className="text-xl font-semibold mb-2">{name}</h1>
            <p className="text-gray-600 mb-1">{address.city}</p>
            <p className="text-gray-600 mb-1">{phone}</p>
            <p className="text-gray-600 mb-1">{website}</p>
            <p className="text-gray-600 mb-1">{company.name}</p>
            <p className="text-gray-600 mb-1">{email}</p>
        </div>
    )
}

export default UserCard;