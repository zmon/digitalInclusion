(function(){

    'use strict';

    angular
        .module('core.services')
        .factory('zipcode', zipcode);
        
        function zipcode() {    
            function getZipcodes() {
                return [
                      { zip: 64024, lat: 39.327618, lng: -94.226953 },
                      { zip: 64029, lat: 39.005925, lng: -94.216381 },
                      { zip: 64030, lat: 38.881359, lng: -94.522744 },
                      { zip: 64034, lat: 38.858551, lng: -94.297554 },
                      { zip: 64035, lat: 39.290513, lng: -93.812219 },
                      { zip: 64036, lat: 39.193758, lng: -93.936807 },
                      { zip: 64037, lat: 39.054756, lng: -93.732729 },
                      { zip: 64040, lat: 38.72376, lng: -93.98766 },
                      { zip: 64048, lat: 39.437763, lng: -94.363579 },
                      { zip: 64050, lat: 39.11586, lng: -94.41055 },
                      { zip: 64052, lat: 39.073415, lng: -94.450236 },
                      { zip: 64053, lat: 39.109351, lng: -94.465282 },
                      { zip: 64054, lat: 39.110355, lng: -94.439036 },
                      { zip: 64055, lat: 39.050847, lng: -94.397998 },
                      { zip: 64056, lat: 39.113273, lng: -94.319762 },
                      { zip: 64057, lat: 39.071957, lng: -94.319308 },
                      { zip: 64058, lat: 39.173856, lng: -94.31356 },
                      { zip: 64060, lat: 39.368922, lng: -94.363744 },
                      { zip: 64061, lat: 38.783394, lng: -94.084862 },
                      { zip: 64062, lat: 39.455731, lng: -94.163205 },
                      { zip: 64063, lat: 38.911994, lng: -94.351673 },
                      { zip: 64064, lat: 38.974484, lng: -94.345181 },
                      { zip: 64065, lat: 38.952177, lng: -94.404444 },
                      { zip: 64066, lat: 39.135995, lng: -94.125836 },
                      { zip: 64067, lat: 39.154284, lng: -93.836041 },
                      { zip: 64068, lat: 39.258315, lng: -94.389653 },
                      { zip: 64070, lat: 38.886623, lng: -94.14889 },
                      { zip: 64071, lat: 39.027828, lng: -93.831717 },
                      { zip: 64072, lat: 39.242022, lng: -94.293828 },
                      { zip: 64074, lat: 39.083651, lng: -94.071296 },
                      { zip: 64075, lat: 38.999631, lng: -94.145273 },
                      { zip: 64076, lat: 38.983162, lng: -93.948056 },
                      { zip: 64077, lat: 39.224578, lng: -94.139126 },
                      { zip: 64078, lat: 38.702692, lng: -94.458131 },
                      { zip: 64079, lat: 39.359017, lng: -94.793273 },
                      { zip: 64080, lat: 38.764216, lng: -94.260423 },
                      { zip: 64081, lat: 38.907046, lng: -94.403932 },
                      { zip: 64082, lat: 38.862111, lng: -94.40832 },
                      { zip: 64083, lat: 38.797393, lng: -94.445534 },
                      { zip: 64084, lat: 39.385681, lng: -94.069434 },
                      { zip: 64085, lat: 39.334841, lng: -93.945283 },
                      { zip: 64086, lat: 38.899171, lng: -94.272385 },
                      { zip: 64088, lat: 39.151558, lng: -94.181903 },
                      { zip: 64089, lat: 39.393886, lng: -94.5609 },
                      { zip: 64090, lat: 38.759359, lng: -94.163578 },
                      { zip: 64092, lat: 39.217578, lng: -94.811119 },
                      { zip: 64093, lat: 38.792472, lng: -93.730884 },
                      { zip: 64096, lat: 39.208822, lng: -93.552504 },
                      { zip: 64097, lat: 39.104909, lng: -93.984271 },
                      { zip: 64098, lat: 39.468076, lng: -94.891475 },
                      { zip: 64101, lat: 39.103463, lng: -94.600614 },
                      { zip: 64102, lat: 39.093844, lng: -94.604041 },
                      { zip: 64105, lat: 39.104725, lng: -94.590375 },
                      { zip: 64106, lat: 39.104839, lng: -94.572176 },
                      { zip: 64108, lat: 39.084895, lng: -94.58647 },
                      { zip: 64109, lat: 39.065794, lng: -94.566343 },
                      { zip: 64110, lat: 39.034503, lng: -94.572806 },
                      { zip: 64111, lat: 39.05758, lng: -94.593879 },
                      { zip: 64112, lat: 39.035975, lng: -94.59519 },
                      { zip: 64113, lat: 39.014065, lng: -94.595652 },
                      { zip: 64114, lat: 38.957802, lng: -94.598599 },
                      { zip: 64116, lat: 39.148811, lng: -94.575242 },
                      { zip: 64117, lat: 39.164449, lng: -94.522657 },
                      { zip: 64118, lat: 39.212864, lng: -94.573951 },
                      { zip: 64119, lat: 39.209967, lng: -94.514665 },
                      { zip: 64120, lat: 39.135007, lng: -94.514957 },
                      { zip: 64123, lat: 39.114346, lng: -94.523234 },
                      { zip: 64124, lat: 39.107225, lng: -94.539212 },
                      { zip: 64125, lat: 39.106463, lng: -94.494153 },
                      { zip: 64126, lat: 39.091093, lng: -94.495978 },
                      { zip: 64127, lat: 39.089138, lng: -94.538537 },
                      { zip: 64128, lat: 39.065566, lng: -94.534623 },
                      { zip: 64129, lat: 39.047897, lng: -94.491958 },
                      { zip: 64130, lat: 39.033683, lng: -94.540754 },
                      { zip: 64131, lat: 38.936041, lng: -94.585011 },
                      { zip: 64132, lat: 38.988304, lng: -94.542261 },
                      { zip: 64133, lat: 39.013884, lng: -94.45772 },
                      { zip: 64134, lat: 38.928031, lng: -94.487653 },
                      { zip: 64136, lat: 39.012794, lng: -94.405733 },
                      { zip: 64137, lat: 38.93536, lng: -94.542668 },
                      { zip: 64138, lat: 38.967119, lng: -94.467927 },
                      { zip: 64139, lat: 38.968342, lng: -94.416366 },
                      { zip: 64145, lat: 38.873529, lng: -94.59402 },
                      { zip: 64146, lat: 38.882969, lng: -94.57196 },
                      { zip: 64147, lat: 38.852781, lng: -94.550532 },
                      { zip: 64149, lat: 38.865403, lng: -94.471632 },
                      { zip: 64150, lat: 39.172185, lng: -94.632532 },
                      { zip: 64151, lat: 39.215355, lng: -94.630084 },
                      { zip: 64152, lat: 39.219074, lng: -94.724733 },
                      { zip: 64153, lat: 39.274581, lng: -94.726643 },
                      { zip: 64154, lat: 39.279265, lng: -94.637168 },
                      { zip: 64155, lat: 39.272316, lng: -94.580107 },
                      { zip: 64156, lat: 39.273306, lng: -94.519995 },
                      { zip: 64157, lat: 39.279003, lng: -94.483504 },
                      { zip: 64158, lat: 39.234381, lng: -94.482919 },
                      { zip: 64161, lat: 39.158585, lng: -94.450909 },
                      { zip: 64163, lat: 39.344563, lng: -94.688192 },
                      { zip: 64164, lat: 39.329423, lng: -94.627074 },
                      { zip: 64165, lat: 39.321428, lng: -94.576265 },
                      { zip: 64166, lat: 39.322075, lng: -94.523041 },
                      { zip: 64167, lat: 39.320589, lng: -94.487141 },
                      { zip: 66018, lat: 38.963864, lng: -94.967153 },
                      { zip: 66019, lat: 38.94544, lng: -95.003284 },
                      { zip: 66020, lat: 39.339341, lng: -95.116107 },
                      { zip: 66021, lat: 38.76628, lng: -95.015 },
                      { zip: 66023, lat: 39.512289, lng: -95.392403 },
                      { zip: 66024, lat: 39.736869, lng: -94.881484 },
                      { zip: 66025, lat: 38.891903, lng: -95.08334 },
                      { zip: 66026, lat: 38.395871, lng: -94.866312 },
                      { zip: 66027, lat: 39.368428, lng: -94.911265 },
                      { zip: 66030, lat: 38.815137, lng: -94.940266 },
                      { zip: 66031, lat: 38.831963, lng: -94.890082 },
                      { zip: 66032, lat: 38.286777, lng: -95.278214 },
                      { zip: 66033, lat: 38.36329, lng: -95.122266 },
                      { zip: 66035, lat: 39.870996, lng: -95.253591 },
                      { zip: 66039, lat: 38.104411, lng: -95.164855 },
                      { zip: 66040, lat: 38.354477, lng: -94.748388 },
                      { zip: 66041, lat: 39.600303, lng: -95.307974 },
                      { zip: 66042, lat: 38.422786, lng: -95.079886 },
                      { zip: 66043, lat: 39.252392, lng: -94.879551 },
                      { zip: 66044, lat: 39.023294, lng: -95.208909 },
                      { zip: 66045, lat: 38.958845, lng: -95.247749 },
                      { zip: 66046, lat: 38.904524, lng: -95.209753 },
                      { zip: 66047, lat: 38.893051, lng: -95.34616 },
                      { zip: 66048, lat: 39.28233, lng: -94.995995 },
                      { zip: 66049, lat: 38.978096, lng: -95.344129 },
                      { zip: 66050, lat: 39.011834, lng: -95.442516 },
                      { zip: 66052, lat: 39.015766, lng: -95.048266 },
                      { zip: 66053, lat: 38.581078, lng: -94.668065 },
                      { zip: 66054, lat: 39.206199, lng: -95.19835 },
                      { zip: 66056, lat: 38.151453, lng: -94.844282 },
                      { zip: 66058, lat: 39.541067, lng: -95.520384 },
                      { zip: 66060, lat: 39.418161, lng: -95.33223 },
                      { zip: 66061, lat: 38.893764, lng: -94.879975 },
                      { zip: 66062, lat: 38.835491, lng: -94.778691 },
                      { zip: 66064, lat: 38.480714, lng: -94.988936 },
                      { zip: 66066, lat: 39.203002, lng: -95.330593 },
                      { zip: 66067, lat: 38.623617, lng: -95.276284 },
                      { zip: 66070, lat: 39.20569, lng: -95.450917 },
                      { zip: 66071, lat: 38.573078, lng: -94.864562 },
                      { zip: 66072, lat: 38.309431, lng: -94.963963 },
                      { zip: 66073, lat: 39.082417, lng: -95.368342 },
                      { zip: 66075, lat: 38.200521, lng: -94.693412 },
                      { zip: 66076, lat: 38.632455, lng: -95.443013 },
                      { zip: 66078, lat: 38.48469, lng: -95.258501 },
                      { zip: 66079, lat: 38.542467, lng: -95.108134 },
                      { zip: 66080, lat: 38.4081, lng: -95.259688 },
                      { zip: 66083, lat: 38.732299, lng: -94.830141 },
                      { zip: 66085, lat: 38.798768, lng: -94.656684 },
                      { zip: 66086, lat: 39.119526, lng: -95.08123 },
                      { zip: 66087, lat: 39.802081, lng: -95.122122 },
                      { zip: 66088, lat: 39.339329, lng: -95.461198 },
                      { zip: 66090, lat: 39.787949, lng: -94.973367 },
                      { zip: 66091, lat: 38.178278, lng: -95.312532 },
                      { zip: 66092, lat: 38.7015, lng: -95.097953 },
                      { zip: 66093, lat: 38.20781, lng: -95.494138 },
                      { zip: 66094, lat: 39.951286, lng: -95.34244 },
                      { zip: 66095, lat: 38.441094, lng: -95.438861 },
                      { zip: 66097, lat: 39.328599, lng: -95.246083 },
                      { zip: 66101, lat: 39.118982, lng: -94.625983 },
                      { zip: 66102, lat: 39.108964, lng: -94.692538 },
                      { zip: 66103, lat: 39.060338, lng: -94.626797 },
                      { zip: 66104, lat: 39.150159, lng: -94.689533 },
                      { zip: 66105, lat: 39.087011, lng: -94.638934 },
                      { zip: 66106, lat: 39.069454, lng: -94.702613 },
                      { zip: 66109, lat: 39.165351, lng: -94.829341 },
                      { zip: 66111, lat: 39.084029, lng: -94.789887 },
                      { zip: 66112, lat: 39.11452, lng: -94.773577 },
                      { zip: 66115, lat: 39.148258, lng: -94.605084 },
                      { zip: 66118, lat: 39.103981, lng: -94.613129 },
                      { zip: 66202, lat: 39.02315, lng: -94.669466 },
                      { zip: 66203, lat: 39.020331, lng: -94.705787 },
                      { zip: 66204, lat: 38.990381, lng: -94.678214 },
                      { zip: 66205, lat: 39.031176, lng: -94.630762 },
                      { zip: 66206, lat: 38.960717, lng: -94.620277 },
                      { zip: 66207, lat: 38.955644, lng: -94.643247 },
                      { zip: 66208, lat: 38.997529, lng: -94.628369 },
                      { zip: 66209, lat: 38.8996, lng: -94.638358 },
                      { zip: 66210, lat: 38.922144, lng: -94.704779 },
                      { zip: 66211, lat: 38.925118, lng: -94.63562 },
                      { zip: 66212, lat: 38.955565, lng: -94.679875 },
                      { zip: 66213, lat: 38.898859, lng: -94.708219 },
                      { zip: 66214, lat: 38.967425, lng: -94.714087 },
                      { zip: 66215, lat: 38.957701, lng: -94.744269 },
                      { zip: 66216, lat: 39.013774, lng: -94.741577 },
                      { zip: 66217, lat: 39.009521, lng: -94.782287 },
                      { zip: 66218, lat: 39.02069, lng: -94.818802 },
                      { zip: 66219, lat: 38.952366, lng: -94.77622 },
                      { zip: 66220, lat: 38.959691, lng: -94.819014 },
                      { zip: 66221, lat: 38.863682, lng: -94.708453 },
                      { zip: 66223, lat: 38.863482, lng: -94.668479 },
                      { zip: 66224, lat: 38.863539, lng: -94.626804 },
                      { zip: 66226, lat: 39.030311, lng: -94.859415 },
                      { zip: 66227, lat: 38.972676, lng: -94.874826 }                  
                ];
            }

            return {
                getZipcodes: getZipcodes
            }
        }

        // function 
        angular
        .module('core.services')
        .factory('zcPosition', zcPosition);
        
        function zcPosition() {
          function getZcPosition(zipcode) {
              // console.log("service");
              // console.log(zipcode);
              var c = parseInt(zipcode);
              // console.log(c);
              var zcs = [
                      { zip: 64024, lat: 39.327618, lng: -94.226953 },
                      { zip: 64029, lat: 39.005925, lng: -94.216381 },
                      { zip: 64030, lat: 38.881359, lng: -94.522744 },
                      { zip: 64034, lat: 38.858551, lng: -94.297554 },
                      { zip: 64035, lat: 39.290513, lng: -93.812219 },
                      { zip: 64036, lat: 39.193758, lng: -93.936807 },
                      { zip: 64037, lat: 39.054756, lng: -93.732729 },
                      { zip: 64040, lat: 38.72376, lng: -93.98766 },
                      { zip: 64048, lat: 39.437763, lng: -94.363579 },
                      { zip: 64050, lat: 39.11586, lng: -94.41055 },
                      { zip: 64052, lat: 39.073415, lng: -94.450236 },
                      { zip: 64053, lat: 39.109351, lng: -94.465282 },
                      { zip: 64054, lat: 39.110355, lng: -94.439036 },
                      { zip: 64055, lat: 39.050847, lng: -94.397998 },
                      { zip: 64056, lat: 39.113273, lng: -94.319762 },
                      { zip: 64057, lat: 39.071957, lng: -94.319308 },
                      { zip: 64058, lat: 39.173856, lng: -94.31356 },
                      { zip: 64060, lat: 39.368922, lng: -94.363744 },
                      { zip: 64061, lat: 38.783394, lng: -94.084862 },
                      { zip: 64062, lat: 39.455731, lng: -94.163205 },
                      { zip: 64063, lat: 38.911994, lng: -94.351673 },
                      { zip: 64064, lat: 38.974484, lng: -94.345181 },
                      { zip: 64065, lat: 38.952177, lng: -94.404444 },
                      { zip: 64066, lat: 39.135995, lng: -94.125836 },
                      { zip: 64067, lat: 39.154284, lng: -93.836041 },
                      { zip: 64068, lat: 39.258315, lng: -94.389653 },
                      { zip: 64070, lat: 38.886623, lng: -94.14889 },
                      { zip: 64071, lat: 39.027828, lng: -93.831717 },
                      { zip: 64072, lat: 39.242022, lng: -94.293828 },
                      { zip: 64074, lat: 39.083651, lng: -94.071296 },
                      { zip: 64075, lat: 38.999631, lng: -94.145273 },
                      { zip: 64076, lat: 38.983162, lng: -93.948056 },
                      { zip: 64077, lat: 39.224578, lng: -94.139126 },
                      { zip: 64078, lat: 38.702692, lng: -94.458131 },
                      { zip: 64079, lat: 39.359017, lng: -94.793273 },
                      { zip: 64080, lat: 38.764216, lng: -94.260423 },
                      { zip: 64081, lat: 38.907046, lng: -94.403932 },
                      { zip: 64082, lat: 38.862111, lng: -94.40832 },
                      { zip: 64083, lat: 38.797393, lng: -94.445534 },
                      { zip: 64084, lat: 39.385681, lng: -94.069434 },
                      { zip: 64085, lat: 39.334841, lng: -93.945283 },
                      { zip: 64086, lat: 38.899171, lng: -94.272385 },
                      { zip: 64088, lat: 39.151558, lng: -94.181903 },
                      { zip: 64089, lat: 39.393886, lng: -94.5609 },
                      { zip: 64090, lat: 38.759359, lng: -94.163578 },
                      { zip: 64092, lat: 39.217578, lng: -94.811119 },
                      { zip: 64093, lat: 38.792472, lng: -93.730884 },
                      { zip: 64096, lat: 39.208822, lng: -93.552504 },
                      { zip: 64097, lat: 39.104909, lng: -93.984271 },
                      { zip: 64098, lat: 39.468076, lng: -94.891475 },
                      { zip: 64101, lat: 39.103463, lng: -94.600614 },
                      { zip: 64102, lat: 39.093844, lng: -94.604041 },
                      { zip: 64105, lat: 39.104725, lng: -94.590375 },
                      { zip: 64106, lat: 39.104839, lng: -94.572176 },
                      { zip: 64108, lat: 39.084895, lng: -94.58647 },
                      { zip: 64109, lat: 39.065794, lng: -94.566343 },
                      { zip: 64110, lat: 39.034503, lng: -94.572806 },
                      { zip: 64111, lat: 39.05758, lng: -94.593879 },
                      { zip: 64112, lat: 39.035975, lng: -94.59519 },
                      { zip: 64113, lat: 39.014065, lng: -94.595652 },
                      { zip: 64114, lat: 38.957802, lng: -94.598599 },
                      { zip: 64116, lat: 39.148811, lng: -94.575242 },
                      { zip: 64117, lat: 39.164449, lng: -94.522657 },
                      { zip: 64118, lat: 39.212864, lng: -94.573951 },
                      { zip: 64119, lat: 39.209967, lng: -94.514665 },
                      { zip: 64120, lat: 39.135007, lng: -94.514957 },
                      { zip: 64123, lat: 39.114346, lng: -94.523234 },
                      { zip: 64124, lat: 39.107225, lng: -94.539212 },
                      { zip: 64125, lat: 39.106463, lng: -94.494153 },
                      { zip: 64126, lat: 39.091093, lng: -94.495978 },
                      { zip: 64127, lat: 39.089138, lng: -94.538537 },
                      { zip: 64128, lat: 39.065566, lng: -94.534623 },
                      { zip: 64129, lat: 39.047897, lng: -94.491958 },
                      { zip: 64130, lat: 39.033683, lng: -94.540754 },
                      { zip: 64131, lat: 38.936041, lng: -94.585011 },
                      { zip: 64132, lat: 38.988304, lng: -94.542261 },
                      { zip: 64133, lat: 39.013884, lng: -94.45772 },
                      { zip: 64134, lat: 38.928031, lng: -94.487653 },
                      { zip: 64136, lat: 39.012794, lng: -94.405733 },
                      { zip: 64137, lat: 38.93536, lng: -94.542668 },
                      { zip: 64138, lat: 38.967119, lng: -94.467927 },
                      { zip: 64139, lat: 38.968342, lng: -94.416366 },
                      { zip: 64145, lat: 38.873529, lng: -94.59402 },
                      { zip: 64146, lat: 38.882969, lng: -94.57196 },
                      { zip: 64147, lat: 38.852781, lng: -94.550532 },
                      { zip: 64149, lat: 38.865403, lng: -94.471632 },
                      { zip: 64150, lat: 39.172185, lng: -94.632532 },
                      { zip: 64151, lat: 39.215355, lng: -94.630084 },
                      { zip: 64152, lat: 39.219074, lng: -94.724733 },
                      { zip: 64153, lat: 39.274581, lng: -94.726643 },
                      { zip: 64154, lat: 39.279265, lng: -94.637168 },
                      { zip: 64155, lat: 39.272316, lng: -94.580107 },
                      { zip: 64156, lat: 39.273306, lng: -94.519995 },
                      { zip: 64157, lat: 39.279003, lng: -94.483504 },
                      { zip: 64158, lat: 39.234381, lng: -94.482919 },
                      { zip: 64161, lat: 39.158585, lng: -94.450909 },
                      { zip: 64163, lat: 39.344563, lng: -94.688192 },
                      { zip: 64164, lat: 39.329423, lng: -94.627074 },
                      { zip: 64165, lat: 39.321428, lng: -94.576265 },
                      { zip: 64166, lat: 39.322075, lng: -94.523041 },
                      { zip: 64167, lat: 39.320589, lng: -94.487141 },
                      { zip: 66018, lat: 38.963864, lng: -94.967153 },
                      { zip: 66019, lat: 38.94544, lng: -95.003284 },
                      { zip: 66020, lat: 39.339341, lng: -95.116107 },
                      { zip: 66021, lat: 38.76628, lng: -95.015 },
                      { zip: 66023, lat: 39.512289, lng: -95.392403 },
                      { zip: 66024, lat: 39.736869, lng: -94.881484 },
                      { zip: 66025, lat: 38.891903, lng: -95.08334 },
                      { zip: 66026, lat: 38.395871, lng: -94.866312 },
                      { zip: 66027, lat: 39.368428, lng: -94.911265 },
                      { zip: 66030, lat: 38.815137, lng: -94.940266 },
                      { zip: 66031, lat: 38.831963, lng: -94.890082 },
                      { zip: 66032, lat: 38.286777, lng: -95.278214 },
                      { zip: 66033, lat: 38.36329, lng: -95.122266 },
                      { zip: 66035, lat: 39.870996, lng: -95.253591 },
                      { zip: 66039, lat: 38.104411, lng: -95.164855 },
                      { zip: 66040, lat: 38.354477, lng: -94.748388 },
                      { zip: 66041, lat: 39.600303, lng: -95.307974 },
                      { zip: 66042, lat: 38.422786, lng: -95.079886 },
                      { zip: 66043, lat: 39.252392, lng: -94.879551 },
                      { zip: 66044, lat: 39.023294, lng: -95.208909 },
                      { zip: 66045, lat: 38.958845, lng: -95.247749 },
                      { zip: 66046, lat: 38.904524, lng: -95.209753 },
                      { zip: 66047, lat: 38.893051, lng: -95.34616 },
                      { zip: 66048, lat: 39.28233, lng: -94.995995 },
                      { zip: 66049, lat: 38.978096, lng: -95.344129 },
                      { zip: 66050, lat: 39.011834, lng: -95.442516 },
                      { zip: 66052, lat: 39.015766, lng: -95.048266 },
                      { zip: 66053, lat: 38.581078, lng: -94.668065 },
                      { zip: 66054, lat: 39.206199, lng: -95.19835 },
                      { zip: 66056, lat: 38.151453, lng: -94.844282 },
                      { zip: 66058, lat: 39.541067, lng: -95.520384 },
                      { zip: 66060, lat: 39.418161, lng: -95.33223 },
                      { zip: 66061, lat: 38.893764, lng: -94.879975 },
                      { zip: 66062, lat: 38.835491, lng: -94.778691 },
                      { zip: 66064, lat: 38.480714, lng: -94.988936 },
                      { zip: 66066, lat: 39.203002, lng: -95.330593 },
                      { zip: 66067, lat: 38.623617, lng: -95.276284 },
                      { zip: 66070, lat: 39.20569, lng: -95.450917 },
                      { zip: 66071, lat: 38.573078, lng: -94.864562 },
                      { zip: 66072, lat: 38.309431, lng: -94.963963 },
                      { zip: 66073, lat: 39.082417, lng: -95.368342 },
                      { zip: 66075, lat: 38.200521, lng: -94.693412 },
                      { zip: 66076, lat: 38.632455, lng: -95.443013 },
                      { zip: 66078, lat: 38.48469, lng: -95.258501 },
                      { zip: 66079, lat: 38.542467, lng: -95.108134 },
                      { zip: 66080, lat: 38.4081, lng: -95.259688 },
                      { zip: 66083, lat: 38.732299, lng: -94.830141 },
                      { zip: 66085, lat: 38.798768, lng: -94.656684 },
                      { zip: 66086, lat: 39.119526, lng: -95.08123 },
                      { zip: 66087, lat: 39.802081, lng: -95.122122 },
                      { zip: 66088, lat: 39.339329, lng: -95.461198 },
                      { zip: 66090, lat: 39.787949, lng: -94.973367 },
                      { zip: 66091, lat: 38.178278, lng: -95.312532 },
                      { zip: 66092, lat: 38.7015, lng: -95.097953 },
                      { zip: 66093, lat: 38.20781, lng: -95.494138 },
                      { zip: 66094, lat: 39.951286, lng: -95.34244 },
                      { zip: 66095, lat: 38.441094, lng: -95.438861 },
                      { zip: 66097, lat: 39.328599, lng: -95.246083 },
                      { zip: 66101, lat: 39.118982, lng: -94.625983 },
                      { zip: 66102, lat: 39.108964, lng: -94.692538 },
                      { zip: 66103, lat: 39.060338, lng: -94.626797 },
                      { zip: 66104, lat: 39.150159, lng: -94.689533 },
                      { zip: 66105, lat: 39.087011, lng: -94.638934 },
                      { zip: 66106, lat: 39.069454, lng: -94.702613 },
                      { zip: 66109, lat: 39.165351, lng: -94.829341 },
                      { zip: 66111, lat: 39.084029, lng: -94.789887 },
                      { zip: 66112, lat: 39.11452, lng: -94.773577 },
                      { zip: 66115, lat: 39.148258, lng: -94.605084 },
                      { zip: 66118, lat: 39.103981, lng: -94.613129 },
                      { zip: 66202, lat: 39.02315, lng: -94.669466 },
                      { zip: 66203, lat: 39.020331, lng: -94.705787 },
                      { zip: 66204, lat: 38.990381, lng: -94.678214 },
                      { zip: 66205, lat: 39.031176, lng: -94.630762 },
                      { zip: 66206, lat: 38.960717, lng: -94.620277 },
                      { zip: 66207, lat: 38.955644, lng: -94.643247 },
                      { zip: 66208, lat: 38.997529, lng: -94.628369 },
                      { zip: 66209, lat: 38.8996, lng: -94.638358 },
                      { zip: 66210, lat: 38.922144, lng: -94.704779 },
                      { zip: 66211, lat: 38.925118, lng: -94.63562 },
                      { zip: 66212, lat: 38.955565, lng: -94.679875 },
                      { zip: 66213, lat: 38.898859, lng: -94.708219 },
                      { zip: 66214, lat: 38.967425, lng: -94.714087 },
                      { zip: 66215, lat: 38.957701, lng: -94.744269 },
                      { zip: 66216, lat: 39.013774, lng: -94.741577 },
                      { zip: 66217, lat: 39.009521, lng: -94.782287 },
                      { zip: 66218, lat: 39.02069, lng: -94.818802 },
                      { zip: 66219, lat: 38.952366, lng: -94.77622 },
                      { zip: 66220, lat: 38.959691, lng: -94.819014 },
                      { zip: 66221, lat: 38.863682, lng: -94.708453 },
                      { zip: 66223, lat: 38.863482, lng: -94.668479 },
                      { zip: 66224, lat: 38.863539, lng: -94.626804 },
                      { zip: 66226, lat: 39.030311, lng: -94.859415 },
                      { zip: 66227, lat: 38.972676, lng: -94.874826 }                  
                ];

                var res = [];
                var length = zcs.length;
                var i;
                for(i=0;i<length;i++) {
                  var z = zcs[i];
                  // console.log(z);
                  if (z.zip === c) {
                    // console.log("found zipcode");
                    res.push(z.lat, z.lng);
                  }
                }
                return res;
          }
        return {
          getZcPosition: getZcPosition
        }

        }
    
})();