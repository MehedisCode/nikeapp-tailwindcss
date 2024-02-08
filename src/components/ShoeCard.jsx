const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImage }) => {

    const handleClick = () => {
        if (bigShoeImage !== imageUrl.bigShoe) {
            changeBigShoeImage(imageUrl.bigShoe)
        }
    }

    return (
        <div className={`border-2 rounded-xl
            ${bigShoeImage === imageUrl.bigShoe
                ? 'border-orange-600'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1
            `} onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl p-4 sm:h-40 sm:w-40">
                <img src={imageUrl.thumbnail} alt="shoe collection" width={127} height={103} className="" />
            </div>
        </div >
    )
}

export default ShoeCard