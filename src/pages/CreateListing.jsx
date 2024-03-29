import {useState, useEffect} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const CreateListing = () => {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(true)
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  })
  return (
    <div>
      Create
    </div>
  )
}

export default CreateListing
