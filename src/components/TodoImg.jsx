import todoImg from "../assets/images/img.png"
export const TodoImg = () => {
  return (
    <div className="h-[600px] w-full rounded-[40px] sm:max-w-[480px]">
      <img
        src={todoImg}
        alt="todoImg"
        className="h-full w-full rounded-[40px] object-cover"
      />
    </div>
  );
};
