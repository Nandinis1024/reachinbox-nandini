import React, { useState } from "react";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Inbox from "@/components/Inbox";
import InboxBorder from "@/components/InboxBorder";
import VerticalNavbar from "@/components/VerticalNavbar";
import { HeroTopSection } from "@/components/TopSection";
import { Messages } from "@/components/Messages";
import { LoadingMore } from "@/components/LoadMore";
import Sent from "@/components/Sent";
import AllMail from "@/components/AllMail";
import NoMails from "@/components/NoMails";
import Email from "@/components/Email";

const OneBox = ({setIsDarkMode, isDarkMode}) => {
    const [selected, setSelected] = useState('inbox');
    const [thread, setThread] = useState(null);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);


    return (
      <div className="w-[1440px] h-[760px] absolute left-10 gap-0 bg-verNavBackground">
        <HorizontalNavbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <VerticalNavbar setSelected={setSelected} selected={selected} isDarkMode={isDarkMode} />
        {selected === 'inbox' && <Inbox thread={thread} setThread={setThread} isDarkMode={isDarkMode} />}
        {selected === 'sent' && <Sent thread={thread} setThread={setThread} isDarkMode={isDarkMode} />}
        {selected === 'allMail' && <AllMail thread={thread} setThread={setThread} isDarkMode={isDarkMode} />}
        {selected === 'noMail' && <NoMails />}
        {selected != 'noMail' && <LoadingMore />}
        {selected != 'noMail' && <HeroTopSection thread={thread} setThread={setThread} isDarkMode={isDarkMode} />}
        {selected != 'noMail' && <Messages thread={thread} setThread={setThread} isEmailModalOpen={isEmailModalOpen} setIsEmailModalOpen={setIsEmailModalOpen} />}
        <div className="absolute top-[204px] left-[384px]">
          <Email thread={thread} isEmailModalOpen={isEmailModalOpen} setIsEmailModalOpen={setIsEmailModalOpen}/>
        </div>
      </div>
    );
};

export default OneBox;
