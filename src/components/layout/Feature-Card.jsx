import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-start border border-border py-8 px-6 hover:opacity-80 transition-opacity duration-300">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
