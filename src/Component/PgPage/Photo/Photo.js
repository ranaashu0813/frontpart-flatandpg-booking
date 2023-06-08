import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Photo(props) {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
		<>
			<button onClick={() => setToggler(!toggler)} style={{outline:"none",background:"black",border:"none",height:"max-content",borderRadius:"0.5rem"}}>
				Images
			</button>
			 <FsLightbox
				toggler={toggler}

				sources={props.img}
			/>
		 </>
	);
}

export default Photo;