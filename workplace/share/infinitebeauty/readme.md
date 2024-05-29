After we dropped off the call, I made changes to this line :


<input type="range" id="futureValue" name="futureValue" min="0" max="100000000" step="1000000" value="10000000"
list="markers" oninput="this.nextElementSibling.value = this.value" required />

you were missing 

`oninput="this.nextElementSibling.value = this.value"`