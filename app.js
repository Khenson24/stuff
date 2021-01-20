
var friends = ["Chris", "Fred", "Velma", "Squidward", "Joshua"];
for (i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ":")
    for (j = 99; j >= 1; j--) {
        if (j > 1)
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
        else
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.")
    }
}