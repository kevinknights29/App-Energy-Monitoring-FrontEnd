import React, { Component } from 'react';
import { DayPilot, DayPilotMonth, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import "./Calendario.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class MonthlyCalendar extends Component {

  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();

    this.state = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 25,
      onBeforeEventRender: args => {
        args.data.borderColor = "darker";
        if (args.data.backColor) {
          args.data.barColor = DayPilot.ColorUtil.darker(args.data.backColor, -1);
        }
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: args => {
              const e = args.source;
              this.calendar.events.remove(e);
            }
          },
          {
            text: "-"
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#3d85c6",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#6aa84f",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#ecb823",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#d5663e",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Auto",
            color: null,
            onClick: args => this.updateColor(args.source, args.item.color)
          },

        ]
      }),
      onTimeRangeSelected: async args => {
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");

        this.calendar.clearSelection();
        if (!modal.result) {
          return;
        }
        this.calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
    };
  }



  updateColor(e, color) {
    e.data.backColor = color;
    this.calendar.events.update(e);
  }


  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    return (
      <div>
        <div style={styles.wrap}>
          <div style={styles.left}>
            <DayPilotNavigator
              selectMode={"week"}
              startDate={DayPilot.Date.today()}
              selectionDay={"2023-03-07"}
              onTimeRangeSelected={args => {
                this.calendar.update({
                  startDate: args.day
                });
              }}
            />
          </div>
          <DayPilotMonth
            {...this.state}
            ref={this.calendarRef}
            startDate={DayPilot.Date.today()}

          />
        </div>
      </div>
    );
  }
}

export default MonthlyCalendar;