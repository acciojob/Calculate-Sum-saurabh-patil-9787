//your JS code here. If required.
 <script>
      const input1 = document.getElementById('n1')
      const input2 = document.getElementById('n2')
      const CalculateBtn = document.getElementById('sum_btn')
      const displaySum = document.getElementById('sum')

      CalculateBtn.addEventListener('click',calculateMysum)

      function calculateMysum(){
        let num1 = parseInt(input1.value)
        let num2 = parseInt(input2.value)

        displaySum.innerText = num1+num2
      }