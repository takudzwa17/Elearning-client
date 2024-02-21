import axios from "axios";
import React, { FC, useEffect, useState } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post(
        "https://elearning-zim-0bb2a7849930.herokuapp.com/api/v1/getVdoCipherOTP",
        {
          videoId: videoUrl,
        }
      )
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=20160313versUSE323NRvVSd1EWhnJLIWyn3700r77YRcKIZVGGaLQcYlM0EqwW1&playbackInfo=eyJ2aWRlb0lkIjoiYWVmM2JjZDk3MzI4NDMyMmE5NGRiMGU1N2E4OGQ4ZTYifQ==
          &player=o22HhkxWwt6wq5n6`}
          style={{
            border: 0,
            width: "90%",
            height: "90%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
