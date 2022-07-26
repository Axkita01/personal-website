import { Carousel } from '@mantine/carousel';
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

export default function Images () {
  return (
    <Carousel 
    sx={{ width: 320 }} 
    mx="auto" 
    withIndicators 
    height={200}
    slideSize="100%"
    loop
    align="center"
    >
      <Carousel.Slide><img style = {{height: '100%'}} src = {pic1}/></Carousel.Slide>
      <Carousel.Slide><img style = {{height: '100%'}} src = {pic2}/></Carousel.Slide>
      <Carousel.Slide><img style = {{height: '100%'}} src = {pic3}/></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}