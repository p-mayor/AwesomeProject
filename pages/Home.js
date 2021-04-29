import React, { useState, useEffect } from "react";
import { View } from "react-native";

import flickrService from "../services/flickrService"

export default function Home() {
  const [currentPhotos, setCurrentPhotos] = useState([]);
  function getImage(){
    flickrService().then((responsePhotoObject) => {
        console.log(responsePhotoObject)
        if (!responsePhotoObject) return
        const photosWithURLS = responsePhotoObject.photos.photo.map((photoObj) => {
            photoObj.photoURL = constructImageURL(photoObj, "c")
            return photoObj
        })
        setCurrentPhotos(photosWithURLS)
    })
  }
  useEffect(()=>{
      getImage()
  },[])
  function constructImageURL(photoObj, size) {
      console.log()
    if (!photoObj) return;
    return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_${size}.jpg`;
  }
  return <View>{currentPhotos.map(photoObj=>{
      return <img src={photoObj.photoURL} key={photoObj.photoURL}/>
  })}</View>;
}
