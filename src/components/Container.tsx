import { Selector } from "./Selector";

export const Container = () => {
  return (
    <>
      <div className="mt-12 h-[60vh] w-full rounded bg-gray-300 px-4 pt-4 lg:h-52">
        <h2 className="mb-6 text-xl tracking-tighter md:mb-4 md:text-2xl">
          NBA 2023-24 REGULAR SEASON STANDINGS
        </h2>
        <Selector />
      </div>
    </>
  );
};
