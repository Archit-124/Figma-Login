figma.showUI(__html__);

figma.ui.onmessage = async messages => {

  if (messages.type === 'login') {
    const username = messages.username;
    const password = messages.password;
    console.log (username);
    try {
      const res = await fetch (
        'https://scyobqacxpbszsowxqnq.supabase.co',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify ({username, password}),
        }
      );
      const data = await res.json ();
      if (res.ok) {
        messages.textContent = 'Login successful!';
      } else {
        messages.textContent = data.messages;
      }
    } catch (error) {
      console.error (error);
      messages.textContent = 'An error occurred. Please try again later.';
    }
  }
  figma.closePlugin ();
};
