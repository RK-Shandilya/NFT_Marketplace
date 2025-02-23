import React from 'react'
import NftCard from './Featured/Nft'
import {nft1, nft2, nft3, nft4, profile} from '../../assets/landingPage/featured_nft/index.js'

const FeaturedNFT = () => {
    const data = [
        [nft1, nft2, nft3, nft4, profile],
        [nft1, nft2, nft3, nft4, profile],
        [nft1, nft2, nft3, nft4, profile]
    ]
  return (
    <div>
      <div className="bg-linear-90 from-[rgba(153,188,237,.2)] via-[rgba(153,248,207,.5)] to-[rgba(255,214,199,.5)] px-20 p-14">
        <div className=' text-2xl md:text-3xl font-bold text-black uppercase mb-6'>FEATURED NFT COLLECTIBLES</div>
            <div className='flex justify-center gap-6'>
            <NftCard data={data[0]}/>
            <NftCard data={data[1]}/>
            <NftCard data={data[2]}/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNFT
