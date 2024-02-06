/*function currentTime() {
                var d = new Date();
                var hr = d.getHours();
                var min = d.getMinutes();
                var sec = d.getSeconds();
                var ampm;

                if (sec < 10) {
                    sec = "0" + sec;
                }
                if (min < 10) {
                    min = "0" + min;
                }

                if (hr == 12) {
                    ampm = "PM";
                } else if ( hr > 12) {
                    hr -= 12;
                    ampm = "PM"
                } else {
                    ampm = "AM"
                }

                var time = hr + ":" + min + ":" + sec + " " + ampm;

                

                document.getElementById("clock").innerText = time;

                setInterval(currentTime, 1000);
            }

            currentTime();*/

            function currentTime() {
                var d = new Date();
                var hr = d.getHours();
                var min = d.getMinutes();
                var sec = d.getSeconds();
                var ampm;

                if (sec < 10) {
                    sec = "0" + sec;
                }
                if (min < 10) {
                    min = "0" + min;
                }

                // Convert Greenwich Mean Time (GMT) to standard time
                var utchr = d.getUTCHours();
                var localHr = hr;
                var timeZone;

                // Calculate time difference between GMT hour and local hour
                var timeDiff = localHr - utchr;

                // Convert time difference to positive (adjusted time difference)
                var adjTimeDiff = Math.abs(timeDiff);

                // Check which time zone based on the converted time difference
                if (localHr < utchr) {
                    // Adjusted time difference for previous day
                    var adjTimeDiff = (timeDiff + 24);
                }

                // Determine time zone based on adjusted time difference
                if (adjTimeDiff == 0) {
                    timeZone = "GMT";
                } else if (adjTimeDiff == 7) {
                    timeZone = "PT";
                } else if (adjTimeDiff == 6) {
                    timeZone = "MT";
                } else if (adjTimeDiff == 5) {
                    timeZone = "CT";
                } else if (adjTimeDiff == 4) {
                    timeZone = "ET";
                } else {
                    timeZone = "Unknown";
                }

                if (hr == 12) {
                    ampm = "PM";
                } else if (hr > 12) {
                    hr -= 12;
                    ampm = "PM";
                } else {
                    ampm = "AM";
                }

                var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

                document.getElementById("clock").innerText = time;

                setInterval(currentTime, 1000);
            }

            currentTime();