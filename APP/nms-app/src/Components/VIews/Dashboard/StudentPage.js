import React from 'react';
import Card from './Shared/Card';
import modules from './StudentComponents/Studentmodules';

export default function StudentPage() {
  return (
    <div className="col-md-9">
          <main className="main-section">
            <div className="container-fluid">
              <div className="row justify-content-between align-items-center g-2">
                <div className="col">
                  <div className="row row-cols-3 mb-5 mx-auto">
                    {modules.map((module) => (
                      <Card
                        key={module.name}
                        link={module.link}
                        name={module.name}
                      >
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      

  );
}