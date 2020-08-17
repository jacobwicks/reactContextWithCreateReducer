import { initialState, reducer } from "./index";
import { Page } from "../../types";
import { PagesAction } from "./actions";
import removePage from "./actions/RemovePage";
import ok from "./actions/Ok";

const makePage = (number: number): Page => ({
  page: `I'm page ${number}`,
  questions: [],
});

const page0 = makePage(0);
const page1 = makePage(1);
const stateWithPages = { ...initialState, pages: [page0, page1] };

describe("PagesContext reducer", () => {
  it("returns state", () => {
    const action = { type: undefined };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it("removes a page from state", () => {
    const newState = { ...stateWithPages };
    expect(newState.pages.length).toBe(2);

    const action = removePage({
      page: page1.page,
    });

    expect(reducer(stateWithPages, action).pages.length).toEqual(1);
  });

  it("is ok when it receives an ok action", () => {
    const newState = { ...stateWithPages };

    const action = ok({
      whatever: 5,
    }) as PagesAction;

    expect(reducer(stateWithPages, action)).toEqual(newState);
  });
});

// import React, { useContext } from "react";
// import { render, cleanup, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { reducer } from "./index";
// import { BotContext, BotProvider, initialState } from "./index";
// import { BotState, BotAction, BotActionTypes } from "../../types/types";
// import { Button, Input } from "semantic-ui-react";
// //import * as localStorage from '../Save';

// describe("BotContext reducer", () => {
//   it("returns state", () => {
//     const action = { type: undefined };
//     //action can't be undefined, but...
//     //@ts-ignore
//     expect(reducer(initialState, action)).toEqual(initialState);
//   });

//   describe("starting and stopping the bot", () => {
//     const runningState = { ...initialState, running: true };
//     it("start action starts the bot", () => {
//       const action = { type: BotActionTypes.start };

//       expect(reducer(initialState, action)).toEqual(runningState);
//     });

//     it("stop action stops the bot", () => {
//       const action = { type: BotActionTypes.stop };
//       expect(reducer(runningState, action)).toEqual(initialState);
//     });
//   });

//   describe("setting the run interval", () => {
//     const intervalState = { ...initialState, interval: 5 };
//     //const testIntervals = [0, 1, 2, 3, 4, 5, 8, 10];
//     describe("valid intervals", () => {
//       const validIntervals = [2, 3, 4, 5, 8, 10];

//       const eachTest = validIntervals.map((interval) => {
//         //an object of type StatAction
//         const action = { type: BotActionTypes.setInterval, interval };

//         const result = { ...intervalState, interval };
//         //return an array of arguments that it.each will turn into a test
//         return [action, interval, intervalState, result];
//       });

//       //pass the array eachTest to it.each to run tests using arguments
//       it.each(eachTest)(
//         //printing the title from it.each uses 'printf syntax'
//         "%#: %s sets the interval to %s",
//         //name the arguments, same order as in the array we generated
//         (action, interval, initialState, result) => {
//           //assert that the interval starts at 5
//           //@ts-ignore
//           expect(initialState.interval).toEqual(5);

//           //assert that the stats object at key: question matches result
//           expect(reducer(initialState, action).interval).toEqual(
//             result.interval
//           );
//         }
//       );
//     });

//     describe("invalid intervals", () => {
//       const invalidIntervals = [0, 1, -1, -5];

//       const eachTest = invalidIntervals.map((interval) => {
//         //an object of type StatAction
//         const action = { type: BotActionTypes.setInterval, interval };

//         const result = intervalState;
//         //return an array of arguments that it.each will turn into a test
//         return [action, interval, intervalState, result];
//       });

//       //pass the array eachTest to it.each to run tests using arguments
//       it.each(eachTest)(
//         //printing the title from it.each uses 'printf syntax'
//         "%#: %s returns default interval",
//         //name the arguments, same order as in the array we generated
//         (action, interval, initialState, result) => {
//           //assert that the interval starts at 5
//           //@ts-ignore
//           expect(initialState.interval).toEqual(5);

//           //assert that the stats object at key: question matches result
//           expect(reducer(initialState, action).interval).toEqual(
//             result.interval
//           );
//         }
//       );
//     });
//   });
// });

// //A helper component to get settings out of BotContext
// //and display them so we can test
// const BotConsumer = () => {
//   //get cards and the index of the current card
//   //also get dispatch
//   const { running, interval, dispatch } = useContext(BotContext);

//   //display each property in a div
//   return (
//     <div>
//       <div data-testid="running">{`${running}`}</div>
//       <div data-testid="interval">{interval}</div>
//       <Button onClick={() => dispatch({ type: BotActionTypes.start })}>
//         Start
//       </Button>
//       <Button onClick={() => dispatch({ type: BotActionTypes.stop })}>
//         Stop
//       </Button>
//       <Input
//         data-testid="setInterval"
//         onChange={(e, { value }: { value: string }) =>
//           dispatch({
//             type: BotActionTypes.setInterval,
//             interval: Number(value),
//           })
//         }
//       />
//       <Button
//         onClick={() => dispatch({ type: BotActionTypes.increaseInterval })}
//       >
//         Increase
//       </Button>
//       <Button
//         onClick={() => dispatch({ type: BotActionTypes.decreaseInterval })}
//       >
//         Decrease
//       </Button>
//     </div>
//   );
// };

// //renders the BotConsumer inside of BotProvider
// const renderProvider = (testState?: BotState) =>
//   render(
//     <BotProvider testState={testState}>
//       <BotConsumer />
//     </BotProvider>
//   );

// //testing the BotConsumer using BotContext inside BotProvider
// describe("BotConsumer using BotContext", () => {
//   describe("bot can be turned on", () => {
//     const offState = { ...initialState, running: false };
//     it("is not running", () => {
//       const { getByTestId } = renderProvider(offState);

//       const isRunning = getByTestId("running");

//       expect(isRunning.textContent).toBe("false");
//     });

//     it("dispatching run action makes it run", () => {
//       const { getByTestId, getByText } = renderProvider(offState);
//       const isRunning = getByTestId("running");

//       expect(isRunning.textContent).toBe("false");

//       const startButton = getByText("start", { exact: false });

//       startButton.click();

//       expect(isRunning.textContent).toBe("true");
//     });
//   });

//   describe("bot can be turned off", () => {
//     const onState = { ...initialState, running: true };
//     it("is running", () => {
//       const { getByTestId } = renderProvider(onState);

//       const isRunning = getByTestId("running");

//       expect(isRunning.textContent).toBe("true");
//     });

//     it("dispatching stop action makes it stop", () => {
//       const { getByTestId, getByText } = renderProvider(onState);
//       const isRunning = getByTestId("running");

//       expect(isRunning.textContent).toBe("true");

//       const stopButton = getByText("stop", { exact: false });

//       stopButton.click();

//       expect(isRunning.textContent).toBe("false");
//     });
//   });

//   describe("interval can be set", () => {
//     const intervalState = { ...initialState, interval: 5 };
//     //current is 0
//     it("has an interval value 5", () => {
//       const { getByTestId } = renderProvider(intervalState);
//       const interval = getByTestId("interval");
//       expect(interval).toHaveTextContent("5");
//     });

//     it("sets the interval value", () => {
//       const { getByTestId } = renderProvider(intervalState);

//       const interval = getByTestId("interval");
//       expect(interval).toHaveTextContent("5");

//       const setInterval = getByTestId(/setinterval/i);

//       //get a reference to the first child of element
//       const setIntervalInput = setInterval.children[0];

//       const newInterval = "7";

//       fireEvent.change(setIntervalInput, {
//         target: { value: newInterval },
//       });

//       expect(setIntervalInput).toHaveValue(newInterval);

//       expect(interval).toHaveTextContent(newInterval);
//     });

//     it("won't set an invalid interval", () => {
//       const { getByTestId } = renderProvider(intervalState);

//       const interval = getByTestId("interval");
//       expect(interval).toHaveTextContent("5");

//       const setInterval = getByTestId(/setinterval/i);

//       const newInterval = "1";

//       const setIntervalInput = setInterval.children[0];

//       fireEvent.change(setIntervalInput, {
//         target: { value: newInterval },
//       });

//       expect(setIntervalInput).toHaveValue(newInterval);

//       expect(interval).toHaveTextContent(intervalState.interval.toString());
//     });

//     it("increments interval", () => {
//       const { getByTestId, getByText } = renderProvider(intervalState);
//       const interval = getByTestId("interval");
//       const increaseButton = getByText(/increase/i);

//       expect(interval).toHaveTextContent(intervalState.interval.toString());

//       increaseButton.click();

//       expect(interval).toHaveTextContent(
//         (intervalState.interval + 1).toString()
//       );
//     });

//     describe("decrements interval", () => {
//       it("decrements by 1", () => {
//         const { getByTestId, getByText } = renderProvider(intervalState);
//         const interval = getByTestId("interval");
//         const decreaseButton = getByText(/decrease/i);

//         expect(interval).toHaveTextContent(intervalState.interval.toString());

//         decreaseButton.click();

//         expect(interval).toHaveTextContent(
//           (intervalState.interval - 1).toString()
//         );
//       });

//       it("won't decrement to invalid interval", () => {
//         const lowIntervalState = { ...initialState, interval: 3 };
//         const { getByTestId, getByText } = renderProvider(lowIntervalState);
//         const interval = getByTestId("interval");
//         const decreaseButton = getByText(/decrease/i);

//         expect(interval).toHaveTextContent("3");

//         decreaseButton.click();

//         expect(interval).toHaveTextContent("2");

//         decreaseButton.click();

//         expect(interval).toHaveTextContent("2");
//       });
//     });
//   });
// });
