import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout';
import { bg } from '../assets/Explore';
import { polygonNFTData } from '../data/nftdetail';
import NFTCollectionCard from '../components/NFTDetail/NFTCollectionCard';
import NFTGallery from '../components/NFTDetail/NFTGallery';

const NftDetail = () => {
    const {id} = useParams();
    const numericId = parseInt(id, 10);
  return (
    <Layout  style={{ backgroundImage: `url(${bg})` }}>
        {
            polygonNFTData.map((data) => {
                if(data.id === numericId){
                    return <div>
                        <NFTCollectionCard data={data}/>
                        <div className='bg-white'>
                            <NFTGallery nft={data.relatedNfts}/>
                        </div>
                    </div>
                }
            })
        }
    </Layout>
  )
}

export default NftDetail