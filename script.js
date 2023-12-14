function convertTime() {
    const istTimeInput = document.getElementById('istTime').value;
    const istTime = new Date(istTimeInput);

    // Indian Standard Time (IST) is UTC+5:30
    const usaTime = new Date(istTime.getTime() - (5.5 * 60 * 60 * 1000)+(5 * 60 * 60 *1000));

    // Display the converted time in USA Eastern Standard Time (EST)
    document.getElementById('convertedTime').textContent = usaTime.toLocaleString('en-US', {timeZone: 'America/New_York'});
  }