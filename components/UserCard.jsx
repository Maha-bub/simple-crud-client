'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserCard = ({ user }) => {
    const { _id } = user;
    const router = useRouter();

    const handleDeleteUser = async (id) => {
        console.log('User Delating', _id)
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        });
        const afterDelete = await res.json();
        router.refresh()
        console.log('After delete ', afterDelete)
    }
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <CardHeader>
                <CardAction>
                    <h1>No action</h1>
                </CardAction>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>
                    Email:{user.email}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/users/${user._id}`}>  <Button className="w-full">View Details</Button></Link>
                <Button>Edit</Button>
                <Button
                    onClick={() => handleDeleteUser(_id)}
                    variant='destructive'>Delete </Button>
            </CardFooter>
        </Card>
    );
};

export default UserCard;