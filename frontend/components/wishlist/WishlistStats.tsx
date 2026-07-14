interface Props {
    total:number;
}

export default function WishlistStats({total}:Props){

return(

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-green-50 rounded-xl p-6 shadow">

<h2 className="text-4xl font-bold text-green-700">
{total}
</h2>

<p className="mt-2">
Saved Stays
</p>

</div>

<div className="bg-blue-50 rounded-xl p-6 shadow">

<h2 className="text-4xl font-bold text-blue-700">
₹4500
</h2>

<p>Average Price</p>

</div>

<div className="bg-yellow-50 rounded-xl p-6 shadow">

<h2 className="text-4xl font-bold text-yellow-600">
95
</h2>

<p>Average Eco Score</p>

</div>

</div>

)

}