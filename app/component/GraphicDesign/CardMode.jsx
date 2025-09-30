import CardSwap, { Card } from './CardSwap';


export default function CardMode(){

    return(
<div className="w-full justify-center items-center relative h-[150px] md:h-[600px]">
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={3000}
    pauseOnHover={false}
  >
    <Card>
      <img
        src="assets/mental_p.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
      <Card>
      <img
        src="assets/mental_b.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
    <Card>
      <img
        src="assets/social_p.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
    <Card>
      <img
        src="assets/social_b.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
     <Card>
      <img
        src="assets/ningju_b.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
     <Card>
      <img
        src="assets/ningju_p.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>
     <Card>
      <img
        src="assets/ningju_t.png"
        alt="Poster"
        className="w-full object-cover rounded-md mt-2"
      />
    </Card>

  </CardSwap>
</div>
);
}