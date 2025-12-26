// Callback
// event queue
// event loop

// Problems - Callback Hell, Pyramid of Doom

asyncOperation1(arg1, (result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            // More nested callbacks
            asyncOperation4(result3, (result4) => {
                // And so on...
            });
        });
    });
});

//to handle this we use promises ,this code is hard to read,debug etc...