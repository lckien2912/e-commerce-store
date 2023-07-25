const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {currentYear} E-Commerce Store, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
