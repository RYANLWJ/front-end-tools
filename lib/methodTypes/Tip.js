const getTimeStr = (timestr) => {
  let setTime = (num) => {
    return num < 10 ? "0" + num : num;
  };
  let _date = timestr ? new Date(timestr) : new Date();
  let _month = setTime(_date.getMonth() + 1);
  let _day = setTime(_date.getDate());
  let _hour = setTime(_date.getHours());
  let _minute = setTime(_date.getMinutes());
  let _second = setTime(_date.getSeconds());

  return _date.getFullYear() + "/" + _month + "/" + _day + " " + _hour + ":" + _minute + ":" + _second;
};

const colors = {
  end: "%s\x1b[0m",
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
};

colors.get = function (type) {
  var THIS = this;
  return THIS[type] + THIS.end;
};

const Tip = {
  safe: (info, timebool) => {
    if (!info) return false;

    console.log(colors.get("FgGreen"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  log: (info, timebool) => {
    // normal log
    if (!info) return false;

    console.log(timebool ? getTimeStr() + ":" : "" + info);
  },
  error: (info, timebool) => {
    // error log
    if (!info) return false;

    console.log(colors.get("FgRed"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  strongError: (info, timebool) => {
    // strong error log
    if (!info) return false;

    console.log(colors.get("BgRed"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  warn: (info, timebool) => {
    // warn log
    if (!info) return false;

    console.log(colors.get("FgYellow"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  strongWarn: (info, timebool) => {
    // strong warn log
    if (!info) return false;

    console.log(colors.get("BgYellow"), (timebool ? getTimeStr() + ":" : "") + info);
  },
};

module.exports = Tip;
