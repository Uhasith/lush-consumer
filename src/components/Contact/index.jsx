const Contact = () => {
  return (
    <div class="bg-white my-[40px]  text-center">
      <div class="w-full">
        <h1 class="text-xl font-bold uppercase">
          Contact For More Informations
        </h1>

        <div className="flex justify-around items-center p-[18px] gap-4 mt-[30px] bg-[#F7C35E] rounded-[3px]">
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-[350px]"
          />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-[350px]"
          />
          <input
            type="text"
            placeholder="Message"
            class="input input-bordered w-[350px]"
          />
          <button class="btn bg-[#097435] border-none normal-case rounded-lg h-[40px] w-[180px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
