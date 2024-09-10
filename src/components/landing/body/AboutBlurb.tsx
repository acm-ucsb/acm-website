"use client";

const AboutBlurb = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>We are ACM @ UCSB!</h1>
      <p className="text-xl font-thin text-gray-500">
        The Pumping Lemma for regular languages states that if a language L is
        regular, then there exists a constant p such that for any string s in L
        with length at least p, the string s can be divided into three parts x,
        y, and z such that the length of xy is at most p, the length of y is
        greater than 0, and for any integer i greater than or equal to 0, the
        string xy^i z is also in L. To prove this, consider that if L is
        regular, it can be recognized by a deterministic finite automaton (DFA)
        with n states. Set p to be the number of states in the DFA. For any
        string s in L with length greater than or equal to p, the DFA must visit
        at least one state more than once because there are only n states and
        the length of s is at least n.{" "}
      </p>
      <p className="text-xl font-thin text-gray-500">
        Therefore, the string s can be split into three parts where x is the
        prefix of s leading up to a repeated state, y is the substring causing
        the DFA to loop through states, and z is the suffix following the loop.
        The length of xy is at most p, so the length of xy is less than or equal
        to p, and since y represents the looping part, the length of y is
        greater than 0. By repeating the substring y zero or more times, the DFA
        will cycle through states and still accept the string, showing that xy^i
        z is in L for all non-negative integers i. This confirms that the
        Pumping Lemma holds for regular languages.
      </p>
      <br />
    </div>
  );
};

export default AboutBlurb;
