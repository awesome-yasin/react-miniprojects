import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Imgcont>
			<Img src={currentSong.cover} alt={currentSong.name}></Img></Imgcont>
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	margin-top: 10vh;
	min-height: 50vh;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Imgcont = styled.div`
position: relative;
width: 200px;
height: 200px;
overflow: hidden;
border-radius: 50%;
`;
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: fit;
	animation:spin 8s linear infinite;
	@media screen and (max-width: 768px) {
		
	}
	@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

const H1 = styled.h2`
	padding: 1rem 1rem 0rem 1rem;
`;

const H2 = styled.h3`
	font-size: 1rem;
	color: black;
`;

export default Song;