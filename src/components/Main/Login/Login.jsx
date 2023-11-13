export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'mor_2314',
          password: '83r5^_',
        }),
      });

      const result = await response.json();
      console.log(result.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="px-6">
        <h1 className="pb-6 text-center text-2xl font-bold">Login</h1>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-fit flex-col items-center justify-center gap-4">
            <div className="group flex gap-1">
              <label className="w-24">User Name:</label>
              <input className="border-2 border-tertiary" type="text" />
            </div>
            <div className="group flex gap-1">
              <label className="w-24">Password:</label>
              <input className="border-2 border-tertiary" type="password" />
            </div>
            <button className="w-full bg-secondary p-2 text-tertiary">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
