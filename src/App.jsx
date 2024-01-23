import { createSignal } from "solid-js";
import "./App.module.css";

const circles = [["Aanya Sehgal", "Shannon Damuth", "Maya Waugh", "Amanda Gomes", "Jake Woo"],
["Isaac Sadhwani", "Anjana Sunil Kumar", "Cindy Chou", "Maddy Tansley"],
["Luke Chasse", "Liam Sutton", "Lauren Chiasson", "Ava Alaeddini", "Linda Lin"],
["Michelle Wang", "Anne Merritt", "Xinlei (Linda) Liu", "Pehel Jain", "Chan Raksmey Lim"],
["Lauren Phan", "Ethan Pon", "Christopher David", "Dhruv Miyani", "Lindsay Navick"],
["Katelyn Luong", "Ria Jansun", "Dominick Doyle", "Jihee Han"],
["Talia Lipman", "Nina James", "Zachary Upson", "Ellie Gatoff", "Zak Kahn"],
["Sruthi Chintalacharuvu", "Yu Jie Law", "Izzy Bulow", "Meira Wang"]]

export default function App() {



  const [foundCircle, setFoundCircle] = createSignal(null);
  const [searchName, setSearchName] = createSignal("");
  console.log(circles[0].includes("Isaac Sadhwani"))


  const findCircle = () => {
    console.log(circles.length)
    // console.log("searching for " + searchName())
    const keyword = "" + searchName().toString();
    console.log("Keyword: + " + keyword)
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].includes(searchName()) !== false) {
        setFoundCircle(circles[i]);
        return;
      }
    }
    // If the name is not found in any circle
    setFoundCircle(null);
  };

  return (

    <div class="flex items-center justify-center min-h-screen bg-gray-300">

      <div class="bg-gray-600 p-8 rounded-md text-white">
        <h1 class="text-4xl font-bold">Welcome to Circle K Circles!</h1>
        <br />
        <form class="bg-inherit">
          <div class="mb-4">
            <label class="text-1xl font-bold" for="username">
              Enter your full name
            </label>
            <input
              onChange={(e) => {
                setSearchName(e.target.value)
              }}
              class="justify-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" />
          </div>


          <button onClick={findCircle}

            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Find my Circle!
          </button>
        </form>

        <br/>

        {foundCircle() && (
          <div>
        <h1 class="text-2xl font-bold">Circle Found!</h1>
            <div class="list-disc">
              {foundCircle().map((name) => (
                <li>{name}</li>
              ))}
            </div>
          </div>
        ) }
      </div>

    </div>



    // <div class="bg-slate-600 inline container items-center justify-center items-center align-middle w-3/6 h-full">

    //   <form class="bg-inherit">
    //     <div class="mb-4">
    //       <label class="justify-center text-gray-900 items-center text-sm font-bold mb-2" for="username">
    //         Your full name
    //       </label>
    //       <input
    //         onChange={(e) => {
    //           setSearchName(e.target.value)
    //         }}
    //         class="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" />
    //     </div>

    //     <button onClick={findCircle}

    //       class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //       Find my Circle!
    //     </button>
    //   </form>


    //   <div class="bg-inherit">

    //     {foundCircle() !== null ? (
    //       <div>
    //         <h1>Circle Found!</h1>
    //         <div class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    //           {foundCircle().map((name) => (
    //             <li>{name}</li>
    //           ))}
    //         </div>
    //       </div>
    //     ) : (
    //       <h1>No circle found for {searchName()}.</h1>
    //     )}
    //   </div>
    // </div>

  );

}
