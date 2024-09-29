import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <img className='mx-auto' src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png" alt="" />

      <Image 
      className='mx-auto my-5'
      src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png"
      width={400}
      height={400}
      alt="check next.config"
      />
    </div>
  );
}
