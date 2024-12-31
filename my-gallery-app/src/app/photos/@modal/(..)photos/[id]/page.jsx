import Modal from '@/components/Modal'
import React from 'react'
import images from '../../../../../../public/photos';
import GalleryCard from '@/components/GalleryCard';

const page = ({params}) => {
  const photo = images.find((photo) => photo.id === Number(params.id));
  return (
    <Modal>
      <GalleryCard photo={photo}/>
    </Modal>
  )
}


export default page