import { Box, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

// This function will scroll the window to the top 
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // for smoothly scrolling
	});
};

export default function BacktoTop() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

  return (
		<Box>
			{showButton && (
				<IconButton
					size="md"
					onClick={scrollToTop} 
					className="back-to-top"
					color="current"
					aria-label={"Back To Top"} 
					icon={<FiArrowUp />}
					marginY={'1vh'}/>
			)}
		</Box>
	);
}