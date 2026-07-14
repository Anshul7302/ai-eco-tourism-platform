import Link from "next/link";

export default function EmptyWishlist(){

return(

<div className="text-center py-24">

<h1 className="text-8xl">
❤️
</h1>

<h2 className="text-4xl font-bold mt-6">

Your Wishlist is Empty

</h2>

<p className="mt-4 text-gray-500">

Explore eco-friendly homestays and save your favourites.

</p>

<Link
href="/homestays"
className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg"
>

Explore Homestays

</Link>

</div>

)

}