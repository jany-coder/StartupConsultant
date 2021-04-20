import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Data Analyst',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 20
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Market Researching',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 15
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Designs Thinking',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 30
    },
   
]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Consultant Date on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;