export default function FriendCard(props) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow border dark:border-gray-700 rounded-lg dark:text-white">
      <img
        src="https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-1/p160x160/200426312_1632237536980754_8187114724154728226_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3_34BLrb7vAAX8r_gvA&_nc_ht=scontent-ccu1-1.xx&oh=00_AT-NoWd0Kh9CLbINS_BA0ovxZL7MrtDnAJ6Mt-q-VYcNwA&oe=621DAB4D"
        alt="Profile"
        className="w-full h-max aspect-auto rounded-t-lg object-cover"
      />

      <div className="py-4 px-2">
        <h6 className="font-medium text-md">Harsh Mangalam</h6>
      </div>

      <div className="py-4 px-2">{props.children}</div>
    </article>
  );
}
