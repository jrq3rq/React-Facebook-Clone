import React from "react";
import Story from "./Story.js";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fseattle-wa_416x416.jpg"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        title="Jeff Bezos"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIvbj0O1Cn6cF1pw8tKEej-eSaoG1X-7ZSxw&usqp=CAU"
        profileSrc="https://image.cnbcfm.com/api/v1/image/105773439-1551717349171rtx6p9uc.jpg?v=1551717410"
        title="Elon Musk"
      />
      <Story
        image="https://api.time.com/wp-content/uploads/2019/07/delete-facebook-data.jpg?quality=85&w=1024&h=628&crop=1"
        profileSrc="https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg"
        title="Mark Zuckerberg"
      />
      <Story
        image="https://lp-cms-production.imgix.net/features/2017/12/Kolomna-Russia-a64ba7242e60.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"
        profileSrc="https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4.jpg"
        title="Vitalik Buterin"
      />
      <Story
        image="https://i.ytimg.com/vi/hVTXu8SgVyE/maxresdefault.jpg"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5a3407f64bbe6f192f088338%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D205%26cropX2%3D1569%26cropY1%3D130%26cropY2%3D1494"
        title="Gary Vaynerchuk"
      />
    </div>
  );
}

export default StoryReel;
