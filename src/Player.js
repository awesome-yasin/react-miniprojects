import React, {useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

// import {ArrowRightIcon, ArrowLeftIcon, PlayArrowIcon, PauseIcon} from '@material-ui/icons/';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
// style
const pointer = { cursor: "pointer", fontSize: "50px" };
const pointerz = { cursor: "pointer", fontSize: "90px" };
const useStyles = makeStyles((theme) => ({
    deleteIcon1: {
      '& svg': {
        fontSize: 44
      }
    },
    
  }));
const Player = ({
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
}) => {
	// Event handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const togglePlayPauseIcon = () => {
		if (isPlaying) {
			return PauseCircleOutlineIcon;
		} else {
			return PlayArrowIcon;
		}
	};
	const [clicked, setClicked] = useState();

	const getTime = (time) => {
		let minute = Math.floor(time / 60);
		let second = ("0" + Math.floor(time % 60)).slice(-2);
		return `${minute}:${second}`;
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		} else if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
			} else {
				await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
				activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
			}
		}
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	const activeLibraryHandler = (newSong) => {
		const newSongs = songs.map((song) => {
			if (song.id === newSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
	};
    const classes = useStyles();
	return (
		<PlayerContainer>
			<TimeControlContainer>
				<P>{getTime(songInfo.currentTime || 0)}</P>
				<Track currentSong={currentSong}>
					<Input
						onChange={dragHandler}
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						type="range"
					/>
					<AnimateTrack songInfo={songInfo}></AnimateTrack>
				</Track>

				<P>{getTime(songInfo.duration || 0)}</P>
			</TimeControlContainer>

			<PlayControlContainer>
				<ArrowLeftIcon
					onClick={() => skipTrackHandler("skip-back")}
					className="skip-back"
					className={classes.deleteIcon1}
					size="2x"
					style={pointer}
				/>
				{/* <PauseCircleOutlineIcon
					onClick={playSongHandler}
					className="play"
					icon={togglePlayPauseIcon()}
					
					style={pointer}
				/> */}
				<IconButton className="play" style={pointerz} size="5x" onClick={() => {
					setClicked(true)
					playSongHandler()}}>
      {clicked ? <PauseCircleOutlineIcon /> : <PlayArrowIcon />}
	 
	  
    </IconButton>
				<ArrowRightIcon
					onClick={() => skipTrackHandler("skip-forward")}
					className="skip-forward"
					// icon={faAngleRight}
					size="2x"
					style={pointer}
				/>
			</PlayControlContainer>
		</PlayerContainer>
	);
};

const PlayerContainer = styled.div`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const TimeControlContainer = styled.div`
	margin-top: 5vh;
	width: 50%;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Track = styled.div`
	background: lightblue;
	width: 100%;
	height: 1rem;
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
	background: linear-gradient(to right, ${(p) => p.currentSong.color[0]}, ${(p) => p.currentSong.color[1]});
`;

const AnimateTrack = styled.div`
	background: rgb(204, 204, 204);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(${(p) => Math.round((p.songInfo.currentTime * 100) / p.songInfo.duration) + "%"});
	pointer-events: none;
`;

const Input = styled.input`
	width: 100%;
	-webkit-appearance: none;
	background: transparent;
	cursor: pointer;
	/* padding-top: 1rem;
	padding-bottom: 1rem; */
	&:focus {
		outline: none;
		-webkit-appearance: none;
	}
	@media screen and (max-width: 768px) {
		&::-webkit-slider-thumb {
			height: 48px;
			width: 48px;
		}
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		background: transparent;
		border: none;
	}
	&::-moz-range-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
	&::-ms-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
	&::-moz-range-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
`;

const P = styled.p`
	padding: 0 1rem 0 1rem;
	user-select: none;
`;

const PlayControlContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 30%;
	@media screen and (max-width: 768px) {
		width: 60%;
	}
`;

export default Player;