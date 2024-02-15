const AboutIconCard = ({ info }) => {
  return (
    <div className="flex flex-col items-center gap-x-1 gap-y-2 rounded-lg px-1 py-2 font-semibold text-[#D6C5DC] backdrop-blur-lg dark:text-[#2B2841] sm:gap-x-2 sm:px-2 md:flex-row md:justify-center md:gap-y-0">
      {info.icon}
      <div className="flex flex-col">
        <p className="leading-none text-[#5b5662] dark:text-[#D4D3D8]">
          {info.firstLine}
        </p>
        <p className="text-sm font-normal text-[#ADADB6] dark:text-[#686671] md:text-xs lg:text-base">
          {info.secondLine}
        </p>
      </div>
    </div>
  );
};

export default AboutIconCard;
