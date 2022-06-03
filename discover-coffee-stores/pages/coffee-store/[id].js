import { useRouter } from 'next/router'
const CoffeeStore = () => {
    const router = useRouter()
    console.log(router)
    return <div>Coffe Store Page {router.query.id}</div>
}

export default CoffeeStore;