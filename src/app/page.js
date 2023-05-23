export default function Home() {
  
  // const [offsetX, setOffsetX] = useState(0);
  // const [offsetY, setOffsetY] = useState(0);

  // const handleMouseMove = (event) => {
  //   const container = event.currentTarget;
  //   const containerWidth = container.offsetWidth;
  //   const containerHeight = container.offsetHeight;
  //   const mouseX = event.clientX;
  //   const mouseY = event.clientY;
  //   const percentX = (mouseX / containerWidth) * 100;
  //   const percentY = (mouseY / containerHeight) * 100;
  //   const newOffsetX = (percentX - 15) * 2;
  //   const newOffsetY = (percentY - 50) * 2;
  //   setOffsetX(newOffsetX);
  //   setOffsetY(newOffsetY);
  // };

  return (


<div class="video_container">
  <video autoplay loop>
    <source src='/intro_video.mp4'></source>
    Your browser does not support the video tag.
  </video>
</div>

   
  );
}


  //<div
    //   className="container"
    //   onMouseMove={handleMouseMove}
    // >

    //   <div
    //     className="background"
    //     style={{
    //       backgroundPosition: `${offsetX}% ${offsetY}%`
    //     }}
    //   >

    //   </div>
    // </div>