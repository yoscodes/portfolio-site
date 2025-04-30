import Form from "./Form";

function Contact() {
  return (
    <section className="text-gray-700 border-t border-r-gray-200" id="contact">
      <div className="container px-5 p-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
            <a id="#contact">Contact</a>
          </h1>

          <p className="mt-7">
            最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたら嬉しいです。
          </p>

          <p>
            もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
