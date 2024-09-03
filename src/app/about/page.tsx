/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function AboutPage() {
	return (
		<>
			<h1 className="text-5xl m-3">¿Quiénes somos?</h1>
			<br />
			<p className="m-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
				temporibus, provident quae laborum molestiae nulla laudantium quia ea
				explicabo perspiciatis quis facilis vero eum dicta. Unde fugit pariatur
				laboriosam?
			</p>
			<p className="m-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
				dolorem ratione nostrum excepturi quibusdam a natus aperiam earum quam
				provident eveniet magni neque est, saepe illo facere voluptate
				consequuntur accusantium!
			</p>
			<p className="m-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic
				adipisci omnis quidem numquam, pariatur asperiores quas dolor modi
				dignissimos recusandae doloribus odio doloremque veritatis explicabo
				nobis impedit in harum.
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Image
					src="/images/nosotros.jpeg"
					width={600}
					height={680}
					alt={"nosotros"}
				/>
			</div>
		</>
	);
}
